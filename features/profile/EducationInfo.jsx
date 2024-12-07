import React from "react";
import Heading from "../../Pages/User/Heading";
import FormRow from "../../Pages/User/FormRow";
import Form from "../../Pages/User/Form";
import Input from "../../Pages/User/Input";
import { useForm, Controller } from "react-hook-form";
import Select from "../../Pages/User/Select";

export default function EducationInfo({
  profileData,
  isEdit,
  register,
  formState,
  control,
}) {
  return (
    <>
      <Heading as="h4">Educational info</Heading>
      <Form>
        <FormRow label="University">
          {isEdit ? (
            <Input
              type="text"
              id="university"
              placeholder="University"
              {...register("university", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.university}</p>
          )}
        </FormRow>
        <FormRow label="Major">
          {isEdit ? (
            <Controller
              name="major"
              control={control}
              defaultValue="computer Science"
              render={({ field }) => {
                return (
                  <Select
                    options={[
                      { label: "Computer Science", value: "computer science" },
                      { label: "Pharmacy", value: "pharmacy" },
                      { label: "Art", value: "art" },
                      { label: "Education", value: "education" },
                    ]}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                );
              }}
            />
          ) : (
            <p>{profileData?.major}</p>
          )}
        </FormRow>
        <FormRow label="Graduation Year">
          {isEdit ? (
            <Input
              type="text"
              id="gdYear"
              placeholder="Graduation Year"
              {...register("gdYear", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.gdYear}</p>
          )}
        </FormRow>
      </Form>
    </>
  );
}
