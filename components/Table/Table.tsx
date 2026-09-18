import "./table.css";

type RowData = {
  [key: string]: string | number;
};

type TableProps = {
  columns: string[];
  data: RowData[];
  striped?: boolean;
};

function Table({ columns, data, striped }: TableProps) {
  return (
    <div>
      <table className={striped ? "striped" : ""}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
