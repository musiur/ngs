import AllTeachers from "../components/admin/teacher/AllTeachers";
import Layout from "../Layout/Layout";
const Teachers = () => {
  return (
    <Layout>
      <div className="containerG sectionG">
      <h2 className="text-xl lg:text-2xl font-bold pb-10">All Teachers</h2>
        <AllTeachers />
      </div>
    </Layout>
  );
};

export default Teachers;
