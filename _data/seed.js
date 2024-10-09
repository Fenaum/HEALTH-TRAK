"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var seedData = {
    users: [
        {
            email: "john@example.com",
            password: "password123",
            name: "John Doe",
            age: 30,
            gender: "male",
            height: 175,
            weight: 70,
            goal: "lose_weight",
        },
        {
            email: "jane@example.com",
            password: "password456",
            name: "Jane Smith",
            age: 25,
            gender: "female",
            height: 162,
            weight: 55,
            goal: "gain_muscle",
        },
        {
            email: "bob@example.com",
            password: "password789",
            name: "Bob Johnson",
            age: 40,
            gender: "male",
            height: 180,
            weight: 90,
            goal: "maintain_weight",
        },
    ],
    meals: [
        {
            name: "Grilled Chicken Breast",
            calories: 350,
            protein: 40,
            carbs: 10,
            fat: 10,
        },
        {
            name: "Salmon with Roasted Vegetables",
            calories: 500,
            protein: 35,
            carbs: 40,
            fat: 25,
        },
        {
            name: "Greek Yogurt with Berries",
            calories: 250,
            protein: 20,
            carbs: 30,
            fat: 5,
        },
        {
            name: "Protein Smoothie",
            calories: 300,
            protein: 30,
            carbs: 40,
            fat: 10,
        },
    ],
    mealLogs: [
        {
            date: "2023-03-01",
            notes: "First day of tracking!",
            totalCalories: 2000,
            meals: ["meal456", "meal456"],
        },
        {
            date: "2023-03-02",
            notes: "Feeling good!",
            totalCalories: 1800,
            meals: ["meal456", "meal457", "meal458"],
        },
        {
            date: "2023-03-03",
            notes: "Cheat day!",
            totalCalories: 2500,
            meals: ["meal456", "meal459", "meal459"],
        },
    ],
    goalCollection: [
        {
            goalType: "weight_loss",
            targetWeight: 160,
            startDate: "2023-03-01",
            endDate: "2023-06-30",
            progress: {
                currentWeight: 170,
                weightLoss: 10,
            },
        },
        {
            goalType: "gain_muscle",
            targetWeight: 60,
            startDate: "2023-03-05",
            endDate: "2023-06-04",
            progress: {
                currentWeight: 56,
                weightLoss: -2,
            },
        },
    ],
    nutrients: [
        {
            date: "2023-03-02",
            calories: 2000,
            protein: 120,
            carbs: 250,
            fat: 70,
            fiber: 30,
        },
        {
            date: "2023-03-03",
            calories: 2200,
            protein: 130,
            carbs: 280,
            fat: 80,
            fiber: 35,
        },
    ],
    waterIntake: [
        {
            date: "2023-03-02",
            totalOunces: 64,
            goalOunces: 80,
        },
        {
            date: "2023-03-03",
            totalOunces: 90,
            goalOunces: 80,
        },
    ],
    foodRecipe: [
        {
            name: "Healthy Stir Fry",
            ingredients: ["chicken", "vegetables", "rice"],
            instructions: [
                "Cook rice according to package directions.",
                "Heat oil in pan and sauté vegetables.",
                "Add chicken and stir fry until cooked.",
            ],
            servingSize: 4,
            prepTime: 20,
            cookTime: 25,
            calories: 350,
            protein: 40,
            carbs: 10,
            fat: 10,
        },
        {
            name: "Overnight Oats",
            ingredients: ["oats", "milk", "yogurt", "chia seeds", "berries"],
            instructions: [
                "Combine oats, milk, yogurt, and chia seeds in a jar.",
                "Mix well and refrigerate overnight.",
                "Top with berries before serving.",
            ],
            servingSize: 1,
            prepTime: 5,
            cookTime: 0,
            calories: 300,
            protein: 15,
            carbs: 50,
            fat: 5,
        },
    ],
};
var firestore_1 = require("firebase/firestore");
var firebaseConfig_1 = require("../src/firebase/firebaseConfig");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, user, userQuery, userSnapshot, userId, userRef, mealPromises, mealRefs, mealIds, _b, _c, mealLogData, mealLog, goal, nutrientEntry, waterEntry, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 17, , 18]);
                    _i = 0, _a = seedData.users;
                    _d.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 16];
                    user = _a[_i];
                    userQuery = (0, firestore_1.query)((0, firestore_1.collection)(firebaseConfig_1.db, "users"), (0, firestore_1.where)("email", "==", user.email));
                    return [4 /*yield*/, (0, firestore_1.getDocs)(userQuery)];
                case 2:
                    userSnapshot = _d.sent();
                    userId = void 0;
                    if (!userSnapshot.empty) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(firebaseConfig_1.db, "users"), user)];
                case 3:
                    userRef = _d.sent();
                    userId = userRef.id;
                    return [3 /*break*/, 5];
                case 4:
                    // User exists, get the ID
                    userId = userSnapshot.docs[0].id;
                    _d.label = 5;
                case 5:
                    mealPromises = seedData.meals.map(function (meal) {
                        return (0, firestore_1.addDoc)((0, firestore_1.collection)(firebaseConfig_1.db, "meals"), meal);
                    });
                    return [4 /*yield*/, Promise.all(mealPromises)];
                case 6:
                    mealRefs = _d.sent();
                    mealIds = mealRefs.map(function (ref) { return ref.id; });
                    // Seed food recipes
                    return [4 /*yield*/, Promise.all(seedData.foodRecipe.map(function (recipe) {
                            return (0, firestore_1.addDoc)((0, firestore_1.collection)(firebaseConfig_1.db, "foodRecipe"), recipe);
                        }))];
                case 7:
                    // Seed food recipes
                    _d.sent();
                    _b = 0, _c = seedData.mealLogs;
                    _d.label = 8;
                case 8:
                    if (!(_b < _c.length)) return [3 /*break*/, 11];
                    mealLogData = _c[_b];
                    mealLog = __assign(__assign({}, mealLogData), { userId: userId, meals: [mealIds[0], mealIds[1]] });
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(firebaseConfig_1.db, "mealLogs"), mealLog)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10:
                    _b++;
                    return [3 /*break*/, 8];
                case 11:
                    goal = __assign(__assign({}, seedData.goalCollection[0]), { userId: userId });
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(firebaseConfig_1.db, "goalCollection"), goal)];
                case 12:
                    _d.sent();
                    nutrientEntry = __assign(__assign({}, seedData.nutrients[0]), { userId: userId });
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(firebaseConfig_1.db, "nutrients"), nutrientEntry)];
                case 13:
                    _d.sent();
                    waterEntry = __assign(__assign({}, seedData.waterIntake[0]), { userId: userId });
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(firebaseConfig_1.db, "waterIntake"), waterEntry)];
                case 14:
                    _d.sent();
                    _d.label = 15;
                case 15:
                    _i++;
                    return [3 /*break*/, 1];
                case 16:
                    console.log("Seed data added successfully!");
                    return [3 /*break*/, 18];
                case 17:
                    error_1 = _d.sent();
                    console.error("Error seeding data:", error_1);
                    return [3 /*break*/, 18];
                case 18: return [2 /*return*/];
            }
        });
    });
}
seedDatabase();
