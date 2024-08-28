import { Link } from "react-router-dom"
import {FiUser, FiUserCheck, FiMail, FiBookmark,FiMessageCircle, FiPhone, FiGlobe,FiKey} from "../../assets/icons/vander"

export const PerfilConfiguracion = () => {
    return (
        <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
            <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                <form>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div>
                            <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                            <div className="form-icon relative mt-2">
                                <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                                <input type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required="" />
                            </div>
                        </div>
                        <div>
                            <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                            <div className="form-icon relative mt-2">
                                <FiUserCheck className="w-4 h-4 absolute top-3 start-4"></FiUserCheck>
                                <input type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required="" />
                            </div>
                        </div>
                        <div>
                            <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                            <div className="form-icon relative mt-2">
                                <FiMail className="w-4 h-4 absolute top-3 start-4"></FiMail>
                                <input type="email" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email" name="email" required="" />
                            </div>
                        </div>
                        <div>
                            <label className="form-label font-medium">Occupation : </label>
                            <div className="form-icon relative mt-2">
                                <FiBookmark className="w-4 h-4 absolute top-3 start-4"></FiBookmark>
                                <input name="name" id="occupation" type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Occupation :" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="mt-5">
                            <label className="form-label font-medium">Description : </label>
                            <div className="form-icon relative mt-2">
                                <FiMessageCircle className="w-4 h-4 absolute top-3 start-4"></FiMessageCircle>
                                <textarea name="comments" id="comments" className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                            </div>
                        </div>
                    </div>

                    <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5" value="Save Changes" />
                </form>
            </div>
        </div>
    )
}
