const Contact = () =>{
    return(
        <div>
            <h1 className=" text-2xl">Contact Us</h1>
            <input type="text"
            className="border border-black m-5 p-3" placeholder="name"/>
            <input type="text"
            className="border border-black m-5 p-3" placeholder="message"/>
            <button className="border border-black rounded-lg m-5 p-3 bg-slate-200">Submit</button>
        </div>
    )
}

export default Contact;