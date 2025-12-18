import { useEffect, useState } from "react";
import axios from "axios";

const emptyForm = {
  name: "",
  type: "",
  status: "",
  lastCleaned: ""
};

export default function EquipmentForm({ selectedItem, clearSelection, reload }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (selectedItem) {
      setForm(selectedItem);
    }
  }, [selectedItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.status) {
      alert("Please fill all required fields");
      return;
    }

    if (selectedItem) {
      await axios.put(
        `http://localhost:5000/api/equipment/${selectedItem.id}`,
        form
      );
    } else {
      await axios.post("http://localhost:5000/api/equipment", form);
    }

    setForm(emptyForm);
    clearSelection();
    reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="">Select Type</option>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="">Select Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        value={form.lastCleaned}
        onChange={(e) => setForm({ ...form, lastCleaned: e.target.value })}
      />

      <button type="submit">
        {selectedItem ? "Update" : "Add"}
      </button>
    </form>
  );
}
