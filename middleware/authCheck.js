export default function ({ redirect }) {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem('formData');
    // const userData = window.localStorage.getItem('formData');

    // if (!userData) {
    //     // If user data is not found, redirect to the login page
    //     redirect('/login');
    // }
    if (!userData) {
        return redirect("/login");
      }
}