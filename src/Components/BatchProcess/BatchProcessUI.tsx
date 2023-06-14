import * as React from "react";
import Logger, { LOG_LEVEL } from "../../logger/Logger";

import ButtonActions from "../ButtonActions"
import SelectOptions from '../SelectOptions';


const SelectApplicationType = ["Select Application Type", "ALL", "NEW CARD", "RENEWAL", "REPLACEMENT",
  "NEW SUPPLEMENTARY CARD", "VIRTUAL CARD"];
const SelectStatus = ["Select Status", "Authorized", "Processed"];


/*
props{
  batchId:
  applicationCount:
  applicationType:
  authorizedBy:
  authorizedDate:
  checked:
  onChange
}
*/

function BatchProcessTableRow(props: any) {
  const { batchId, applicationCount, applicationType, authorizedBy, authorizedDate, checked, onChange } = props;
  return (
    <tr className="align-middle" key={batchId}>
      <input
        type="checkbox"
        className="form-check-input mx-2 my-3 border-1"
        name={batchId}
        checked={checked}
        onChange={onChange}
      />
      <td>{batchId}</td>
      <td>{applicationCount}</td>
      <td>{applicationType}</td>
      <td>{authorizedBy}</td>
      <td>{authorizedDate}</td>
      <td>
        <input type="radio" className="form-check-input mx-2" name="gridRadios"
          id={batchId} />
      </td>
    </tr>
  );
}

interface BatchItem {
  batchId: string;
  applicationCount: number;
  applicationType: string;
  authorizedBy: string;
  authorizedDate: string;
  isChecked: boolean;

}

type BatchItems = BatchItem[];

type SelectItems = (a: BatchItems) => void;

interface BatchTableProps {
  items: BatchItems;
  onSelect: SelectItems;
}

/*
props{
  onSelect()
  items:[{batchId:, applicationCount:, applicationTpe:, authorizedBy:, authorizedDate, checked: }]
}
*/

function BatchProcessTable(props: BatchTableProps) {
  Logger.LOG(LOG_LEVEL.INFO, props.toString());
  return (
    <>
      <div className="datatable-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" className="form-check-input" /></th>
              <th scope="col">Batch Id</th>
              <th scope="col">No Application</th>
              <th scope="col">Application Type</th>
              <th scope="col">Authorized By	</th>
              <th scope="col">Authorized Date</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            {
              props.items.map((e: any, index: any) => {
                return <BatchProcessTableRow
                  batchId={e.batchId}
                  applicationCount={e.applicationCount}
                  applicationType={e.applicationType}
                  authorizedBy={e.authorizedBy}
                  authorizedDate={e.authorizedDate}
                  checked={e.checked}
                  onChange={
                    (event: any) => {
                      const { checked } = event.target;
                      const updatedBatch = props.items.map(
                        (a: BatchItem) => {
                          if (a.batchId == e.batchId) {
                            return { ...a, isChecked: checked };
                          }
                          else {
                            return a;
                          }
                        }
                      )

                      console.log("change occure for e ")
                      props.onSelect(updatedBatch);
                    }
                  }
                />
              }
              )
            }

          </tbody>
        </table>
      </div>
    </>
  );
}


/*
props{
   onProcessClick:
   onSearchClick:
   onApplicationTypeSelect:
   onStatusSelected:
  items:[{batchId:, applicationCount:, applicationTpe:, authorizedBy:, authorizedDate, checked:  }]
  onItemsUpdate:(itmes)=>{}
}
*/
export default function BatchProcessUI(props: any) {
  Logger.LOG(LOG_LEVEL.INFO, props);
  const onButtonActionclick = (name: string) => {
    Logger.LOG(LOG_LEVEL.INFO, "on button click " + name);
    switch (name) {
      case "Search":
        props.onSearchClick();
        break;
      case "Process":
        props.onProcessClick();
    }

  }

  const onItemsUpdate = (itmes: BatchItems) => {
    console.log("items update ", itmes);
  }

  return (
    <>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <ButtonActions
                  alignment="right"
                  items={[{ title: "Search", is_primary: true }, { title: "Process", is_primary: true }]}
                  onClick={onButtonActionclick} />

                <div className="d-flex justify-content-center mt-2">
                  <SelectOptions
                    name={"Application Type"}
                    items={SelectApplicationType.map(a => { return { name: a, id: a } })}
                    onSelect={props.onApplicationTypeSelect}
                  />
                  {/* <div className="mx-2">
                          <label className="mt-2">Application Type</label>
                          <select className="form-select" aria-label="Default select example">
                            {SelectApplicationType.map((name) => <SelectOptionItem name={name} />)}
                          </select>
                        </div> */}
                  <SelectOptions
                    name={"Status"}
                    items={SelectStatus.map(a => { return { name: a, id: a } })}
                    onSelect={props.onStatusSelected}
                  />
                  {/* <div className="mx-2">
                          <label className="mt-2">Status</label>
                          <select className="form-select" aria-label="Default select example">
                            {SelectStatus.map((name) => <SelectOptionItem name={name} />)}
                          </select>
                        </div> */}
                </div>
                <h5 className="card-title">Batch Process</h5>
                <BatchProcessTable
                  onSelect={props.onItemsUpdate}
                  items={props.items}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );

}