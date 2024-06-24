import LeftMenu from "@/components/LeftMenu"
import Stories from "@/components/Stories"
import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"
import RightMenu from "@/components/RightMenu"




const Homepage = () => {
  return (
    <div className='flex gap-6'>
        <div className="hidden xl:block w-[20%]"> <LeftMenu/></div>
        
        <div className="w-full lg:w-[70%] xl:w-[50%] p-6">   
          <div>

            <Stories/>
            <AddPost/>
            <Feed/>

          </div> 
        </div>
      <div className="hidden lg:block w-[30%]"><RightMenu/></div>

    </div>
  )
}

export default Homepage