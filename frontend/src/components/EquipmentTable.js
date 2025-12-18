import axios from "axios";

export default function EquipmentTable({ data, onEdit, reload }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/equipment/${id}`);
    reload();
  };

  return (
    <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.lastCleaned}</td>
            <td>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
