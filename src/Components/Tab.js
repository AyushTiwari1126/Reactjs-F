function Tab(Props){
    return(<>
    
           
                <li class="nav-item" role="presentation">
                  <button class={Props.TabClass} id={Props.TabId} data-bs-toggle="tab" data-bs-target={Props.TabDataBsTarget} type="button" role="tab" aria-controls={Props.TabAriaControls} 
                  aria-selected={Props.TabAriaSelected} tabindex="-1">{Props.Name}</button>
                </li>
    
    </>)
}

export default Tab;