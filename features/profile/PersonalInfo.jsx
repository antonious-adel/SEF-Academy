import Heading from "../../Pages/User/Heading";
import FormRow from "../../Pages/User/FormRow";
import Form from "../../Pages/User/Form";
import Input from "../../Pages/User/Input";

export default function PersonalInfo({
  profileData,
  isEdit,
  register,
  formState,
}) {
  const { errors } = formState;

  return (
    <>
      <Heading as="h4">Personal info</Heading>
      <Form>
        <FormRow size="half" label="Student ID">
          <p>#{profileData?.id}</p>
        </FormRow>
        <FormRow size="half" label="Age">
          {isEdit ? (
            <Input
              type="number"
              id="age"
              placeholder="Age"
              {...register("age", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.age}</p>
          )}
        </FormRow>
        <FormRow size="half" label="Nationality">
          {isEdit ? (
            <Input
              type="text"
              id="nationality"
              placeholder="Nationality"
              {...register("nationality", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.nationality}</p>
          )}
        </FormRow>
        <FormRow size="half" label="Country">
          {isEdit ? (
            <Input
              type="text"
              id="country"
              placeholder="Country"
              {...register("country", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.country}</p>
          )}
        </FormRow>
        <FormRow size="half" label="City">
          {isEdit ? (
            <Input
              type="text"
              id="city"
              placeholder="City"
              {...register("city", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.city}</p>
          )}
        </FormRow>
      </Form>
    </>
  );
}
