
import PropTypes from 'prop-types';
const CardInfo = ({image , description , title}) => {
  return (
    
    <div className=" bg-white ">
    <div className=" rounded-none    h-[250px] ">

    <img src={image} alt="photo" className="  rounded-none  w-[100%]  h-full    "/>
    </div>

    <div className="text-left p-6">
  
      <h3 className="text-xl text-main xl:text-[30px] font-[700] text-primary mb-[20px]">{title}</h3>
      <p className="text-[#757575] mb-[20px]">
         {description}
      </p>

      <a href="#" className="text-[#092F3D] text-md font-[400] inline-flex items-center  transition-transform duration-500 ease-in-out  hover:translate-x-[20px]">
        Read now <span className="ml-1">&rarr;</span>
      </a>
    </div>
  </div>

  )
}
CardInfo.propTypes = {
  image: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
};

export default CardInfo