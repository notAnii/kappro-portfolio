import ContactPage from "@/components/contact/ContactPage"
import { ContactInfo } from "@/typings";
import { fetchContact } from "@/utils/fetchContact";

const Contact = async () => {
  const contactInfo: ContactInfo = await fetchContact();
  return (
    <>
      <ContactPage contactInfo={contactInfo} />
    </>
  )
}

export default Contact