import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./CreateActivity.css";
import axios from "axios";
import Swal from 'sweetalert2';

const CreateAct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data)
    axios
    .post(`${import.meta.env.VITE_API_URL}/activities/create`, data, { headers: { 'Content-Type': 'application/json' }})
    .then((res) => {
      console.log(res.data)
      //popup to show it been save
      Swal.fire(
          'Good job!',
          'Your data had been saved.',
          'success',
      )
    .then(()=> document.addEventListener("click", window.location = "/"))
    })
    .catch((err) => {
        //popup to show if error
        Swal.fire(
            'Sorry for a problem!',
            err.response.data.error,
            'error'
        )
    })
  };


  return (
<div>
    <div className="bigBox">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="type">
          <h2>Type activity : </h2>
          <select {...register("ActType", { required: true })}>
            <option value="">---- Select your activity ----</option>
            <option value="Running">Running  🏃</option>
            <option value="Swimming">Swimming  🏊🏻‍♂️</option>
            <option value="Hiking">Hiking  🌲👨🏻‍🦯</option>
            <option value="Riding bicycle">Riding bicycle  🚴🏻‍♂️</option>
            <option value="Walking">Walking  🚶</option>
          </select>
          {errors.ActType && <p>Type is required</p>}
        </div>

        <div className="type">
          <h2>Duration : </h2>
          <div className="boxDu">
            <input type="number" min="0" max="24"{...register("hour", { required: true})} />
            {errors.hour && <p>Hour is required</p>}
            <h3>Hours</h3>
            <input type="number" min="0" max="59"{...register("minute", { required: true })} />
            {errors.minute && <p>Minutes is required</p>}
            <h3>Minutes</h3>
          </div>
        </div>

        <div className="cal">
          <h2>Date : </h2>
          <input type="date" {...register("date", { required: true})} />
            {errors.date && <p>Date is required</p>}
        </div>

        <div className="typeD">
          <h2>Description </h2>
          <textarea {...register("description")} placeholder="Description" />
        </div>

        <div className="btn">
          <button style={{border: "0px", cursor: "pointer"}}>
              <input type="submit" value="Add" style={{cursor: "pointer"}}/>
          </button>
          <Link to="/">
              <input type="submit" value="Cancel" style={{cursor: "pointer"}}/>
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
  
};

export default CreateAct;
