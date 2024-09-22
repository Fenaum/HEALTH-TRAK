import "./MealLogForm.css"

export default function MealLogForm() {
    return (
        <form className="flex flex-col gap-2 mealLogForm">
            <div className="flex justify-between">
                <button> Back </button>
                <button> Add </button>
            </div>
            <h2>Meal</h2>
            <label htmlFor="">Calories</label>
            <input type="text" />
            <label htmlFor="">Total Fat (g)</label>
            <input type="text" />
            <label htmlFor="">Total Carbohydrages (g)</label>
            <input type="text" />
            <label htmlFor="">Total Protein (g)</label>
            <input type="text" />
        </form>
    )
}