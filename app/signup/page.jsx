"use client";

import { useContext } from "react";
import { userContext } from "../components/UserProvider/UserProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  let { createNewUser, googlePopUp } = useContext(userContext);
  const router = useRouter();
  let submit = event => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    let name = event.target.name.value;

    console.log(email, password);
    createNewUser(email, password).then(res => {
      let user = res.user;
      user.displayName = name;
      console.log(user);
      event.target.reset();
      router.push("/user", { scroll: false });
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold p-5">Sing Up Here!</h1>

            <form
              onSubmit={submit}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <h1>
                  Have an account
                  <Link className="text-blue-700" href={"/login"}>
                    Login
                  </Link>
                </h1>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            <div className="form-control mt-6">
              <button onClick={googlePopUp} className="btn btn-primary">
                Login google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
