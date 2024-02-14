<template>
    <div class="mb-6">
        <NavBar />
    </div>
    <div class="container">
        <v-card class="mx-auto" max-width="500" title="User Registration">
            <v-form ref="form" @submit.prevent="onSubmit">
                <v-container>
                    <v-text-field v-model="first" color="primary" label="First name" variant="underlined"></v-text-field>

                    <v-text-field v-model="last" color="primary" label="Last name" variant="underlined"></v-text-field>

                    <v-text-field v-model="email" color="primary" label="Email" variant="underlined"></v-text-field>

                    <v-text-field v-model="password" color="primary" label="Password" placeholder="Enter your password"
                        variant="underlined"></v-text-field>

                    <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox>
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="success" type="submit" @click="loginUser(userInfo)">
                        Register
                        <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
        <v-card class="mx-auto mt-9" max-width="500">
            <div class="mx-6 my-6">
                <p>First Name: {{ first }}</p>
                <p>Last Name: {{ last }}</p>
                <p>Email Address: {{ email }}</p>
                <p>Terms Accepted: {{ terms }}</p>
            </div>
        </v-card>
    </div>
</template>
        
 

<script>
export default {

    data() {
        return {
            first: '',
            last: '',
            email: '',
            password: '',
            terms: false,
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                first: this.first,
                last: this.last,
                email: this.email,
                password: this.password,
                terms: this.terms,
            };
            localStorage.setItem('formData', JSON.stringify(formData));
            // Clear the form fields
            this.first = '';
            this.last = '';
            this.email = '';
            this.password = '';
            this.terms = '';
            // console.log(localStorage)
            // Redirect to the index page
            this.$router.push('/');
        },
        // async loginUser(userInfo) {
        //     // Attempt login...
        //     // On success, store user data and redirect
        //     if (loginSuccessful) {
        //         const formData = {
        //             first: userInfo.first,
        //             last: userInfo.last,
        //             email: userInfo.email,
        //             password: userInfo.password,
        //             terms: userInfo.terms,
        //         };
        //         localStorage.setItem('formData', JSON.stringify(formData));

        //         // Redirect to the original target route or to a default route
        //         if (this.redirectUrl) {
        //             this.$router.push(this.redirectUrl);
        //             console.log(333, "Redirect")
        //         } else {
        //             this.$router.push('/');
        //             console.log(222)
        //         }
        //     }
        // },
        // setRedirectUrl(toRoute) {
        //     // Store the full path of the current route if it's not one of the excluded paths
        //     if (!['/', '/login', '/sign-up'].includes(toRoute.path)) {
        //         this.redirectUrl = toRoute.fullPath;
        //     }
        // }

    }
}
</script>

<style >
.container {
    margin: auto 0;
}
</style>