import PropTypes from 'prop-types';

const CardAbout = ({image , title , description , bg , HeadTxt , paraTxt}) => {
  return (
<div>

   
    <div  style={{backgroundColor:`${bg}`}} className=" rounded-3xl shadow p-6 text-center hover:shadow-lg transition">
      <div className="text-blue-600 text-4xl mb-4  flex justify-center ">
        <img  width={"50px"} src={image} alt="photo"/>
      </div>
      <h3 className="text-lg font-semibold text-gray-800" style={{color:`${HeadTxt}`}}>{title}</h3>
      <p className=" mt-2" style={{color:`${paraTxt}`}}>
      {description}
      </p>
      <button className="mt-4 h-[40px] w-[130px] border   rounded-full  hover:text-white transition" style={{border:`2px solid ${HeadTxt}` , color:`${HeadTxt}`}}>
        Learn More
      </button>
    </div>
</div>

  )
}
CardAbout.propTypes = {
    image: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    bg: PropTypes.string.isRequired, 
    HeadTxt: PropTypes.string.isRequired, 
    paraTxt: PropTypes.string.isRequired, 
    

  };
  
export default CardAbout