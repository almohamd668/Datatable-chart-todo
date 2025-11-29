import DataTable from "react-data-table-component";
import axios from "axios";
import { useState,  useEffect } from "react";
import "./Datatable.css";
import { addValue } from "../store/chartSlice";
import { useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";

const DTest = ({ url }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    async function getData() {
      const { data } = await axios.get(`/${url}`);
      setLoading(false);
      0;
      setKeys(
        url !== "users"
          ? Object.keys(data[1]).filter((item, idx) => idx !== 0)
          : Object.keys(data[1])
      );
      url == "todos" &&
        data.map((val) =>
          val.completed == true
            ? (val.completed = "OK")
            : (val.completed = "NO")
        );
      dispatch(addValue({ url: url, count: data.length }));
      setData(data);
      setRecords(data);
    }

    getData();
  }, [url, dispatch]);

  const row = (keys, idx) => keys[idx];

  const columns = [
    {
      name: keys[0],
      selector: row(keys, 0),
      sortable: true,
    },
    {
      name: keys[1],
      selector: row(keys, 1),
      sortable: true,
    },
    {
      name: keys[2],
      selector: row(keys, 2),
    },
    url === "users" && {
      name: keys[3],
      selector: row(keys, 3),
    },
  ];

  // search

  console.log(records);
  const handleFiltre = (e) => {
    const newData = data.filter((row) =>
      row[keys[1]].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
    console.log(newData);
  };

  return (
    <div className="container mt-5">
      {loading ? (
        <div
          style={{
            height: "100vh",
            position: "absolute",
            width: "100vw",
            top: "0",
            left: "0",
            background: "#fff",
            zIndex: "100",
          }}
          className="d-flex align-items-center justify-content-center"
        >
          <GridLoader
            color={"rgba(45,162, 132,0.8)"}
            loading={loading}
            size={100}
          />
        </div>
      ) : (
        <div>
          <div className="text-end">
            <input onChange={handleFiltre} type="text" />
          </div>
          <DataTable
            columns={columns}
            data={records}
            fixedHeader
            pagination
          ></DataTable>
        </div>
      )}
    </div>
  );
};

export default DTest;
