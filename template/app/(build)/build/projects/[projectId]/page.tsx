//import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const ProjectIdPage =  ({
  params
}: {
  params: { projectId: string; }
}) => {
//   const course = await db.course.findUnique({
//     where: {
//       id: params.courseId,
//     },
//     include: {
//       chapters: {
//         where: {
//           isPublished: true,
//         },
//         orderBy: {
//           position: "asc"
//         }
//       }
//     }
//   });

//   if (!course) {
//     return redirect("/");
//   }

//   return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);
console.log(params.projectId)
  return (
    <div>
      {params.projectId}
    </div>
  )
}
 
export default ProjectIdPage;