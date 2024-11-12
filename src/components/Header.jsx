import { VscDebugAll } from "react-icons/vsc";
const Header = ({selectedTab,setSelectedTab}) => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <VscDebugAll style={{fontSize:'2.5rem'}}/>
          <span class="fs-2 brand-name ">Krishna</span>
        </a>

        <ul class="nav nav-pills navbar">
          <li class="nav-item" onClick={()=>setSelectedTab("Home")}>
            <a href="#" class={`nav-link ${selectedTab==="Home" && "active"}`} aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item" onClick={()=>setSelectedTab("About")}>
            <a href="#" class={`nav-link ${selectedTab==="About" && "active"}`}>
              About
            </a>
          </li>
          <li class="nav-item" onClick={()=>setSelectedTab("Portfolio")}>
            <a href="#" class={`nav-link ${selectedTab==="Portfolio" && "active"}`}>
              Portfolio
            </a>
          </li>
          <li class="nav-item" onClick={()=>setSelectedTab("Services")}>
            <a href="#" class={`nav-link ${selectedTab==="Services" && "active"}`}>
              Services
            </a>
          </li>
          <li class="nav-item" onClick={()=>setSelectedTab("Contact")}>
            <a href="#" class={`nav-link ${selectedTab==="Contact" && "active"}`}>
              Contact Us
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;