import ContactTable from "@/components/contact-table";
import Search from "@/components/search";

const Contacts = () => {
  return (
    <div className="max max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
      </div>
      <ContactTable />
    </div>
  );
};

export default Contacts;