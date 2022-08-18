import React, { useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useForm, useFieldArray } from "react-hook-form"
function BasicForm() {
    const JsSchema = Yup.object().shape({
        FavFood: Yup.string().required("Value is mendatory!"),
        food: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required("Value is mendatory"),
            }),
        ),
    })
    const optionsDf = { resolver: yupResolver(JsSchema) }
    const { control, formState, handleSubmit, register, watch, reset } = useForm(optionsDf)
    const { errors } = formState
    const { fields, append, remove } = useFieldArray({ name: "food", control })
    const FavFood = watch("FavFood")
    useEffect(() => {
        const currentProp = parseInt(FavFood || 0)
        const previousProp = fields.length
        if (currentProp > previousProp) {
            for (let i = previousProp; i < currentProp; i++) {
                append({ name: "" })
            }
        } else {
            for (let i = previousProp; i > currentProp; i--) {
                remove(i - 1)
            }
        }
    }, [FavFood])
    function onSubmit(res: any) {
        console.log(JSON.stringify(res, null, 4))
    }
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="mb-3">React Hook Dynamic Form Tutorial</h2>
                <div className="form-group">
                    <label className="mb-2">What is your fav food?</label>
                    <select
                        {...register("FavFood")}
                        className={`form-control ${errors.FavFood ? "is-invalid" : ""}`}
                    >
                        {["Select Options", 1, 2, 3, 4, 5, 6].map((i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                </div>
                {fields.map((item, i) => (
                    <div key={i} className="mt-3 mb-2">
                        <div>
                            <strong className="text-primary">food {i + 1}</strong>
                            <div className="form-group">
                                <input
                                    {...register(`food.${i}.name`)}
                                    className={`form-control ${
                                        errors.food?.[i]?.name ? "is-invalid" : ""
                                    }`}
                                    type="text"
                                />
                                <div className="invalid-feedback"></div>
                            </div>
                        </div>
                    </div>
                ))}
                <button type="submit" className="btn btn-success mt-3 mb-2">
                    Submit
                </button>
                <button onClick={() => reset()} type="button" className="btn btn-info">
                    Reset
                </button>
            </form>
        </div>
    )
}
export default BasicForm
