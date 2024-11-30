import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
        })

    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row */}
               <div className="md:flex mb-6 ">
               
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee name</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full"/>
                        </label>

                    </div>
                
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered w-full"/>
                        </label>

                    </div>
        
               </div>


                {/* form row */}
               <div className="md:flex mb-6">
               
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="supplier" placeholder="supplier" className="input input-bordered w-full"/>
                        </label>

                    </div>
                
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full"/>
                        </label>

                    </div>
        
               </div>


                {/* form row */}
               <div className="md:flex mb-6">
               
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="category" placeholder="category" className="input input-bordered w-full"/>
                        </label>

                    </div>
                
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full"/>
                        </label>

                    </div>
        
               </div>


                {/* form row */}
               <div className="mb-6">
               
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full"/>
                        </label>

                    </div>
            
        
               </div>
               
               <input type="submit" value="Add coffee" className="btn btn-block" />



               
            </form>
        </div>
    );
};

export default AddCoffee;