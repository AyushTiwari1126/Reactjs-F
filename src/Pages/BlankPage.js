function BlankPage(props){
    return (<>
    
    <main id="main" className="main">

<div className="pagetitle">
  <h1>{props.title}</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active">{props.title}</li>
    </ol>
  </nav>
</div>



</main>

    
    </>)
}

export default BlankPage;