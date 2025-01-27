import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddFood from "../pages/AddFood";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import MealDetails from "../pages/MealDetails";
import Dashboard from "../layouts/Dashboard";
import MyReview from "../pages/dashboard/user/MyReview";
import PaymentHistory from "../pages/dashboard/user/PaymentHistory";
import RequestedMeal from "../pages/dashboard/user/RequestedMeal.";
import UserProfile from "../pages/dashboard/user/UserProfile";
import AddMeal from "../pages/dashboard/admin/AddMeal";
import AdminProfile from "../pages/dashboard/admin/AdminProfile";
import AllMeal from "../pages/dashboard/admin/AllMeal";
import AllReview from "../pages/dashboard/admin/AllReview";
import ManageUser from "../pages/dashboard/admin/ManageUser";
import ServeMeal from "../pages/dashboard/admin/ServeMeal";
import UpcomingMeal from "../pages/dashboard/admin/UpcomingMeal";
import Meals from "../pages/Meals";
import Checkout from "../pages/Checkout";
import UpcomingMeals from "../pages/UpcomingMeals";
import UpcomingMealDetails from "../pages/UpcomingMealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "all-meals",
      //   element: <Meals />,
      // },
      // {
      //   path: "upcoming-meals",
      //   element: <UpcomingMeals />,
      // },
      // {
      //   path: "/upcoming-meal-details/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpcomingMealDetails />
      //     </PrivateRoute>
      //   ),
      // },

      // {
      //   path: "/meal-details/:id",
      //   element: (
      //     <PrivateRoute>
      //       <MealDetails />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/checkout/:packageName",
      //   element: (
      //     <PrivateRoute>
      //       <Checkout />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/add-food",
      //   element: (
      //     <PrivateRoute>
      //       <AddFood />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  // user dashboard routes
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: "my-reviews",
  //       element: <MyReview />,
  //     },

  //     {
  //       path: "payment-history",
  //       element: (
  //         // <PrivateRoute>
  //         <PaymentHistory />
  //         // </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "requested-meals",
  //       element: (
  //         // <PrivateRoute>
  //         <RequestedMeal />
  //         // </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "profile",
  //       element: (
  //         // <PrivateRoute>
  //         <UserProfile />
  //         // </PrivateRoute>
  //       ),
  //     },
  //   ],
  // },

  // admin dashboard routes
  //TODO: add admin route checker
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //       {
  //         path: "add-meal",
  //         element: <AddMeal />,
  //       },

  //       {
  //         path: "profile",
  //         element: (
  //           // <AdminRoute>
  //           <AdminProfile />
  //           // </AdminRoute>
  //         ),
  //       },
  //       {
  //         path: "all-meals",
  //         element: <AllMeal />,
  //       },
  //       {
  //         path: "all-reviews",
  //         element: <AllReview />,
  //       },
  //       {
  //         path: "manage-users",
  //         element: <ManageUser />,
  //       },
  //       {
  //         path: "serve-meals",
  //         element: <ServeMeal />,
  //       },
  //       {
  //         path: "upcoming-meals",
  //         element: <UpcomingMeal />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <Register />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);

export default router;