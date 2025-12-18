import { useEffect, useState } from "react";
import axios from "axios";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";

function App() {
  const [equipmentList, setEquipmentList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const loadEquipment = async () => {
    const res = await axios.get("http://localhost:5000/api/equipment");
    setEquipmentList(res.data);
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Equipment Tracker</h2>

      <EquipmentForm
        selectedItem={selectedItem}
        clearSelection={() => setSelectedItem(null)}
        reload={loadEquipment}
      />

      <EquipmentTable
        data={equipmentList}
        onEdit={setSelectedItem}
        reload={loadEquipment}
      />
    </div>
  );
}

export default App;
