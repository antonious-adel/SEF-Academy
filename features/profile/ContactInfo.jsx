import Heading from "../../Pages/User/Heading";
import FormRow from "../../Pages/User/FormRow";
import Form from "../../Pages/User/Form";
import Input from "../../Pages/User/Input";
import { MdEmail, MdCall } from "react-icons/md";
import { useForm } from "react-hook-form";

export default function ContactInfo({
  profileData,
  isEdit,
  register,
  formState,
}) {
  return (
    <>
      <Heading as="h4">Contact info</Heading>
      <Form>
        <FormRow label="Email" icon={<MdEmail />}>
          {isEdit ? (
            <Input
              type="email"
              id="email"
              placeholder="Email address*"
              {...register("email", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.email}</p>
          )}
        </FormRow>
        <FormRow label="Mobile Number" icon={<MdCall />}>
          {isEdit ? (
            <Input
              type="text"
              id="phone"
              placeholder="Mobile*"
              {...register("phone", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.phone}</p>
          )}
        </FormRow>
      </Form>
    </>
  );
}
