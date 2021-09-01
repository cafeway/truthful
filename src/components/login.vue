
<template>
<div>
<body class="my-login-page">
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="brand">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADwCAMAAABCI8pNAAABUFBMVEUjHyAREiQVFSPW19kAAADS09XOz9Ha293j5ObX2Nr3mBrf4OLFxsj3mB34lRz2khwAACD5nhr4jh7AwcX6nRz6oxn8rBj5phn4iCAKAAAYExTn5+f/zAP+vBEAABr/xQn9tRP9wA4AABgAEyAAABQSCQygoKKYl5m4ubsACyHu8PCqqqyBgIK0tbf8shcADh8pKTcdHi53eIBkZm10c3X/0QAaGh9wb3AqJyhpSB5BLh8KFx+PjpSHh45fYGcyNEJGRlL4+/pKSElbWFk8OTmmiBPjuAg1Lh24lhGMchTTqg0tJh/wwQfAmw5kUxrmshLGlhXjpxfWmxl4Vx1OOxyMZhuqehzFjRq6gxvvoxvEhxvVkRudbRpzUB2pcR0pIh+DVx6VYB3RgRxePiC2bx96Sx9ONSHohR+sZB6TViDOcx90RSG4ZB/fdyBPUF1AQU7j4mZEAAAIwklEQVR4nO3Z63vSWB7A8QQSApJqaixIaGMtdyiSS42tzQVbrTPTcXdHHbXq1m2d6jjOwP//bs8l4VZw50Ufycn+vvM8JQnweD5zTgJNOQ6CIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIIitassewJWnNbRlD+GKKzXl0rLHcLUJ9UdNYdmDuNKE7UftZJFKDx61k0WqHbbbySJpB+Wkkbh8m5CSc8WrSe2EkWpyu4xLDqnUoaLkkIRGKCq3u8kg1bYjUbmcEJIwAiVmloR8ORuWmFnKZ4EU+5JNygIprglSEkn5sOSQ8skiabMk1m97abuH2iSpU9IONaZRpUNpe4ZU6sqPGb7nWmrks4iUG5HyiNTJ5nZYvQOhcWo2JElhhIQnS2By8ZVsCVHyiJSWpknoMXPA3uLTnDqZm/kkfJw1U+1ApqttEUnKd3eZWnza9gixiCTl04csmWoZKUfDJDHayUmYNHqqw9JXiZo8RcrNJUl1tki5NI2Swp00JUU7jJLwtwcxPUmqAykmLSLlMCnHJkkNhy1iUiYdosRJkphjjSTSQlJYGpOiPVZJOUwS55LSQFpuNVX8Jikj5sptkTVShpYmpHAngxSluphJkz/cMkeihSS6HZHK9O+2YoMxUjQvO4iUmZ4lRMJ/bBIbLP3KVGvOI4mSWK9hEi3DGCkzQZLJllTGpw8mZSmJtVmaIUnk/CkTUgZ7stksI7PUa7V47hJJbJOzJ5ulJHLDP58nJKfFK6llj/obOdyTo6MnjjMmyRlKik4fQsrT2/6Y5Dz94ejoR37ZA19c7+j++vr9n1KEJKPSOUIiS42sNULCd18lScKk45/xO35oLXvki+KfoPGhEf6YQiQ5I6IP1HxEoostJNEQqfWMvuMfzrLHviDlaJ30k4JI+XK7nC2HpCxdahIi1RoZfOMB/XaBSAp9w3psp0n5mQ7wCJPoyROSwjviISn8XQrP0n36jmexJd2h/TMkoaUmRSSy1HKUJNLv4oRE3rD+TFn22Bc0QeqGV2pyeVDJ2YNXW0iiX/jkRq1HSXfiO0t3J0lkqaUJSZboL+eijElydIFHs7TOEEkm544UkihIvETi1+lb/hVfEo2SyFoTQ1K01ggpCi28dfKGWJM2NjZCEjl30FIjJHE8MVOk1h38jo278SVtkO7+omhdeiNPzFAS9RDF9Czd2WCCtEFIabrYItJIwTCJnDtIQkgTigmSW+vdpe+IL2lzYxNFSeHJ8y0SmqW7m+QdMSZtRqTmaNwPNKGpziGh1TgmvY4t6R41/aJwhzsdWf0GSVXlxoMDLSRtxp208Vxx9mu1w6aqjkmqivfUkKTKnce1WsrpbcaeRNpTnL0XD3va4yZmTM6SSkgqeuzUtNTLFy9Tyq/kLa97yx77gihpr/f0BP2Pf7VPTYQ0CpFc9NDRHO41nh1HeR9vUuFeofBc6T1HD4V7b+g8zSPVdx2HvGjzVc/Br40xCY3uVe9hgXTvjY5M8iVSQ+5wDmUXCictBW+9jTOp8KYVkpCppT1W0edSszlFQqtu/134GkQ6KcSZVCwU0SBb7wpFUuFVRTt4MElqNmrazq7DIRF5QeENntNinEl4mL8qL4vFyNRzOE7oTpI4znEic/Hkg/IGbceYdELG+W9lb2xSQlKThu9G9saih8p7vB1fUuvd2iXTaYsrdZtRqovPo+jJk2MqKhZP40qqnK7RkCncWiueVpyDkamDz6Ni+BSeI7pdfBHXW5POx+Jl09opukaEJvx59C46fvJUeR9tL3vki+u9jca4N2lqaQfRHLUmRWfRTJ5Vlj3yhTkfVlZp2LQabZ+i7xHdbpN8Hq2FB1eOkSh8/m18Rcj0MDKt/qfy26TpoNvZ1Zzz1dHTzmmkO4/riURDplskNA+3Rq2i8+nwAItGR1ZXou3z/WUP+n+ETddI4QPdPqtoXOt84tCt6FXnXLwniSOma5db/ejsn92a88S5E3sRx+1/Wrm2Mtu18x439/AHBkTI9PL6pVauH19cPnr9MxsiZPo4Z/R7Z5eP3ThmRIRNN2a7fvHb9dlDn9kRIdPeHNLsoc8PGRKhb7Bfb9yc6sbX32/OxJYImS5mAJ++zB5gTHTZVPk0I4r7l4Y5Vaam5Y9K5fPk/kcGRTOmC6cyPplu32ZThE23R1XQN6Wboz1WRZOmL8hQ+SPa+8qsaML0gcO/xydAhEy/jyYJfQDTabqI8y+xfyNi+otuO5+SIKKmr854m30RWm5//jlS7P/1JQEifN9ovH3M9JUBgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgqD/n1KJi+MTF5BYKLkkffLYaEevVvmt8XG8uTX1ylhGSbof8Hw/wMPVdd3eQj/R5pbf9fjtoMXT44Zb1Q1rsMzR/q3CWULDrXq8P9S3Br7eNXi/XzWG/fTQs7oub9qBXh34w4zgD+1YklqjH/yIVK1XFc/yvcCybb5juL7lu1aQ9Xih2zHEes5w5c5Q9VQ+ML7PIE30H46scz0wyfrXp/5xIxhWA8PkDTPVN03DGBhTJN0e+IOOMbBcQa+6A7tabVi6PuyUd7p9qy7YHVkXjEcZ4ft40Hi2DVcfVoeGXe3rhu/1baGv88OGyetDEzn6CGLX+74VdIxGw3Z51x361tYkieddi+8OBuaIhPZ1QRCkTkhShECU/a2Fg7jiTM+qd20v6Hi+p5qujx/rQdcVfGvgua7fbNjBwHU92x4M0HS47k7fDQcXkap1V/B8Hy0833TJwrP4vlqXLSsTLbx+hi+b34tUraOhDL1Bw7YsN7C2Xduy3YFr9fuI5Nm651lVCx20vKHr9j3bRefMDIkPAnSF8010eTCNAF8e8DXQHlarg+jyYPar/eB7kXgTXWJ10zTxz1ag48eWkTINxSBnmWkGvMFvBeg0M1O8sZVCP/kZEg5funV6Qrbovk5OUHoR53U+/h9KfJK/PSQpILHQfwEjFeiJ3dU4fgAAAABJRU5ErkJggg==" alt="logo">
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">Login</h4>
							<form>
								<div class="form-group">
									<label for="email">E-Mail Address</label>
									<input id="email" type="email" class="form-control" name="email" v-model="form.email" value="" required autofocus>
								</div>

								<div class="form-group">
									<label for="password">Password
										<a href="forgot.html" class="float-right">
											Forgot Password?
										</a>
									</label>
									<input v-model="form.password" id="password" type="password" class="form-control" name="password" required data-eye>
								</div>

								<div class="form-group">
									<div class="custom-checkbox custom-control">
										<input type="checkbox" name="remember" id="remember" class="custom-control-input">
										<label for="remember" class="custom-control-label">Remember Me</label>
									</div>
								</div>

								<div class="form-group m-0">
									<button type="button" @click="submit()" class="btn btn-primary btn-block">
										Login
									</button>
								</div>
								<div class="mt-4 text-center">
									Don't have an account? <a href="#" @click="toRegister()">Create One</a>
								</div>
								<div class="mt-4 text-center">
									<a href="#" @click="reset()">Click here to reset Password</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</body>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data(router) {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    check: function () {
      alert('fsdhf')
    },
    submit: function () {
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(data => {
        this.$router.push('/')
      })
      .catch(err => {
        this.$swal({
          icon: 'warning',
          text: err.message
        })
      })
    },
    reset: function () {
      let email = prompt('enter your email to reset your password')
      firebase.auth().sendPasswordResetEmail(email).then(
        alert('A password was sent to your email box')
      )
    },
    toRegister: function () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>
html,body {
	height: 100%;
}

body.my-login-page {
	background-color: #f7f9fb;
	font-size: 14px;
}

.my-login-page .brand {
	width: 90px;
	height: 90px;
	overflow: hidden;
	border-radius: 50%;
	margin: 40px auto;
	box-shadow: 0 4px 8px rgba(0,0,0,.05);
	position: relative;
	z-index: 1;
}

.my-login-page .brand img {
	width: 100%;
}

.my-login-page .card-wrapper {
	width: 400px;
}

.my-login-page .card {
	border-color: transparent;
	box-shadow: 0 4px 8px rgba(0,0,0,.05);
}

.my-login-page .card.fat {
	padding: 10px;
}

.my-login-page .card .card-title {
	margin-bottom: 30px;
}

.my-login-page .form-control {
	border-width: 2.3px;
}

.my-login-page .form-group label {
	width: 100%;
}

.my-login-page .btn.btn-block {
	padding: 12px 10px;
}

.my-login-page .footer {
	margin: 40px 0;
	color: #888;
	text-align: center;
}

@media screen and (max-width: 425px) {
	.my-login-page .card-wrapper {
		width: 90%;
		margin: 0 auto;
	}
}

@media screen and (max-width: 320px) {
	.my-login-page .card.fat {
		padding: 0;
	}

	.my-login-page .card.fat .card-body {
		padding: 15px;
	}
}
</style>
