<template>
    <div class="mb-6">
        <NavBar />
    </div>
    <div class="container">
        <v-card class="mx-auto" max-width="500" title="User Registration">
            <v-form ref="form" @submit.prevent="onSubmit" >
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
            alert('Logged In Successful, you will be redirected to the home page');

            // Redirect to the index page
            this.$router.push('/');
        },
       
        // submitDemoForm() {
        // // In a real scenario, you might want to send this data to a server for processing
        // // For demo purposes, you can log the data to the console
        // console.log('Demo Form Submitted:', this.schoolData);
        // alert('Demo Form Submitted!');
        // },
    }
}
</script>

<style >
.container {
    margin: auto 0;
}
</style>