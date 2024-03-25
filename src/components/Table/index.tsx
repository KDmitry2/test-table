import React, {ChangeEvent, useEffect, useState} from 'react';
import Modal from "../Modal";
import {getKeyByValue} from "../../utils";

type TableProps<DataType> = {
  rows: Array<DataType>;
};

type typeKeyInObject = keyof Object

interface ICell {
  key: string,
  value: string,
  index: number
}

export function Table<T>({rows}: TableProps<T>) {

  const [rowsTable, setRowsTable] = useState(rows)
  const [cell, setCell] = useState<ICell>({key: "", value: "", index: 0})
  const [searchValue, setSearchValue] = useState<string>("")

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const editHandlerFiled = (e: ChangeEvent<HTMLInputElement>) => {
    setCell({...cell, value: e.target.value})
  }

  const editRow = () => {
    let readyRowsTable = [...rowsTable]
    let lineBeingEdited = readyRowsTable[cell.index]
    const keyTyped = cell.key as keyof typeof lineBeingEdited;
    if (typeof lineBeingEdited[keyTyped] === "string") {
      lineBeingEdited[keyTyped] = (cell.value) as T[keyof T]
    }
    setRowsTable(readyRowsTable)
  }

  const openModal = (row: T, index: number) => {
    const value: string = Object.values(row as Object).find(r => typeof r === "string")
    setCell({value, key: getKeyByValue(row as Object, value) || "", index})
  }


  useEffect(() => {
    setRowsTable(rows.filter(item => {
      let isIncludedInTextField = false
      Object.values(item as Array<T>).find(r => {
        if (typeof r === "string") {
          isIncludedInTextField = r.includes(searchValue)
        }
        return isIncludedInTextField
      })
      return isIncludedInTextField
    }))

  }, [searchValue, rows]);

  function printValues(obj: Object) {
    let result = ""
    for (let key in obj) {
      if (typeof obj[key as typeKeyInObject] === "object") {
        printValues(obj[key as typeKeyInObject]);
      } else {
        result += `${key} = ${obj[key as typeKeyInObject]} \n`
      }
    }
    return result
  }


  return (
    <div className="mt-4">
      <Modal successCallback={editRow}>
        <div className="d-flex flex-column justify-content-start align-items-start gap-2">
          <span className="d-block">{cell.key}</span>
          <input type="text" className="form-control" value={cell.value} onChange={editHandlerFiled}/>
        </div>
      </Modal>
      <div className="d-flex justify-content-end">
        <input type="search" placeholder="Search" className="form-control w-25 mb-5" value={searchValue}
               onChange={searchHandler}/>
      </div>
      {rowsTable?.length ? <table className="table table-striped">
        <thead>
        <tr>
          {
            Object.keys(rowsTable[0] as Object).map((item, index) => (<th key={index}>{item}</th>))
          }
          {/*Пустой th под кнопку edit*/}
          <th/>
        </tr>
        </thead>
        <tbody>
        {
          rowsTable.map((row, index) =>
            <tr key={index}>
              {

                Object.values(row as Object).map((item, index) => (
                  <td
                    className="align-middle"
                    key={index}
                  >
                    {typeof item === "object" ? <pre
                        className="mb-0"
                        dangerouslySetInnerHTML={{__html: printValues(item)}}></pre> :
                      <pre className="mb-0" dangerouslySetInnerHTML={{__html: item}}></pre>}
                  </td>))
              }
              <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(row, index)}>
                <button className="btn btn-light">Edit</button>
              </td>
            </tr>)
        }
        </tbody>
      </table> : <h1 className="text-white">Данных нет</h1>}
    </div>
  );
}

export default Table;