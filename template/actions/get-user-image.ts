import  db  from "@/libs/db";

interface GetUserProps {
    email: string;
  };
  


export const getUserImage =  async ({email}:GetUserProps)=>{


    try {
        const image = await db.user.findUnique({
            where: {
                email 
            }
          });
          if(!image){
            throw new Error("User  not found");
          }
          if(image.imageUrl!==null){
            return image.imageUrl
          }

    } catch (error) {
        console.log("[GET IMAGE]", error);
        return {
          imageUrl: null,
          
        }
    }
}