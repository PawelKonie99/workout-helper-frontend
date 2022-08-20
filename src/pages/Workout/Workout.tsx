import { useForm, SubmitHandler, Controller, useFieldArray } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import { BasicForm, CustomSelect, FormButton, TextInput, WorkoutRepInput } from "@/components"
import { IWorkoutSeriesSchema } from "@/types"
import { workoutSeriesSchema } from "@/schema"
import { INPUT_TYPES } from "@/enums"
import { INITIAL_REP_COUNT } from "@/constants"

const defaultFormValues = {
    exerciseData: [
        {
            exerciseName: "",
            numberOfReps: INITIAL_REP_COUNT,
        },
    ],
}

interface testInterface {
    exerciseData: IWorkoutSeriesSchema[]
}

// interface FormValues  {
//     cart: {
//       name: string;
//       price: number;
//       quantity: number;
//     }[];
//   }

const Workout = () => {
    // const {
    //     register,
    //     control,
    //     handleSubmit,
    //     formState: { errors }
    //   } = useForm<FormValues>({
    //     defaultValues: {
    //       cart: [{ name: "test", quantity: 1, price: 23 }]
    //     },
    //     mode: "onBlur"
    //   });
    //   const { fields, append, remove } = useFieldArray({
    //     name: "cart",
    //     control
    //   });
    // const {
    //     handleSubmit,
    //     control,
    //     formState: { errors },
    //     reset,
    // } = useForm<testInterface>({
    //     resolver: yupResolver(workoutSeriesSchema()),
    //     defaultValues: defaultFormValues,
    //     mode: "all",
    // })

    const onSubmit: SubmitHandler<IWorkoutSeriesSchema> = (data) => {
        // submitLoginForm(data, navigate, dispatch)
        // reset()
    }

    // const { fields, append, remove } = useFieldArray({ name: "exerciseData", control })

    // const setsArray = [
    //     {
    //         numberOfReps:
    //     }
    // ]

    return (
        <BasicForm />
        // <div className="w-full flex justify-center">
        //     <div className="flex flex-col justify-center">
        //         <p>Witaj na stronie nowego treningu</p>
        //         {/* // */}
        //         <form
        //             onSubmit={handleSubmit(onSubmit)}
        //             className="flex flex-col items-center w-full"
        //         >
        //             <Controller
        //                 name="exerciseName"
        //                 control={control}
        //                 render={({ field: { onChange, ref, value } }) => (
        //                     <CustomSelect
        //                         isError={errors.exerciseName}
        //                         onChange={onChange}
        //                         inputRef={ref}
        //                         value={value}
        //                         errorMessage={errors.exerciseName?.message}
        //                     />
        //                 )}
        //             />
        //             <div className="flex">
        //                 <Controller
        //                     name="numberOfReps"
        //                     control={control}
        //                     render={({ field: { onChange, ref, value } }) => (
        //                         <WorkoutRepInput
        //                             isError={errors.exerciseName}
        //                             onChange={onChange}
        //                             inputRef={ref}
        //                             value={value}
        //                             errorMessage={errors.exerciseName?.message}
        //                         />
        //                     )}
        //                 />
        //                 <Controller
        //                     name="numberOfReps"
        //                     control={control}
        //                     render={({ field: { onChange, ref, value } }) => (
        //                         <WorkoutRepInput
        //                             isError={errors.exerciseName}
        //                             onChange={onChange}
        //                             inputRef={ref}
        //                             value={value}
        //                             errorMessage={errors.exerciseName?.message}
        //                         />
        //                     )}
        //                 />
        //                 <Controller
        //                     name="numberOfReps"
        //                     control={control}
        //                     render={({ field: { onChange, ref, value } }) => (
        //                         <WorkoutRepInput
        //                             isError={errors.exerciseName}
        //                             onChange={onChange}
        //                             inputRef={ref}
        //                             value={value}
        //                             errorMessage={errors.exerciseName?.message}
        //                         />
        //                     )}
        //                 />
        //             </div>
        //             <FormButton label="Podsumuj testowo" />
        //         </form>
        //         {/* <div className="flex w-full">
        //             <Select
        //                 options={options}
        //                 styles={selectWorkoutStyles}
        //                 placeholder="Wybierz ćwiczenie"
        //             />
        //             <WorkoutRepInput />
        //             <WorkoutRepInput />
        //             <WorkoutRepInput />
        //             <WorkoutRepInput />
        //             <WorkoutRepInput />
        //         </div>
        //         {/* // */}
        //     </div>
        // </div>
    )
}

export default Workout
