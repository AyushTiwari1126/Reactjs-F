import MenuItem from './MenuItem'
import CollapsableMenuItem from "./CollapsableMenuItem";

const cardsManagementSubMenu = [
  { name: "Card Product Setup", path: "/dashboard/blankPage" },
  { name: "Card Product Rules", path: "/dashboard/blankPage" },
  { name: "Credit Scoring", path: "/dashboard/blankPage" },
  { name: "Customer Group Fee", path: "/dashboard/blankPage" }
];


const applicationFormsSubMenu = [
  { name: "New Application", path: "/dashboard/newapplication" },
  { name: "Pending Applications", path: "/dashboard/pending-applications" },
  //{ name: "Process Applications", path: "/dashboard/process-application" }
  { name: "Authorize Application", path: "/dashboard/authorize-application" },
  { name: "Batch Process", path: "/dashboard/batch-process" }
];

function SideBar() {

  return (<>
    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">
        <MenuItem name="Dashboard" path="/dashboard" />


        <CollapsableMenuItem id="components-nav" iconClass="bi bi-menu-button-wide" name="Card Management" submenus={cardsManagementSubMenu} />

        <CollapsableMenuItem id="forms-nav" iconClass="bi bi-journal-text" name="Application Forms" submenus={applicationFormsSubMenu} path="/dashboard/newapplication" />


      </ul>

    </aside>


  </>)
}

export default SideBar;