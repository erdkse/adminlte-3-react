import React from 'react';
import {Link} from 'react-router-dom';

import {Button} from '@components';

const SettingsTab = ({isActive}) => {
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <form className="form-horizontal">
                <div className="form-group row">
                    <label
                        htmlFor="inputName"
                        className="col-sm-2 col-form-label"
                    >
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputName"
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputEmail"
                        className="col-sm-2 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputName2"
                        className="col-sm-2 col-form-label"
                    >
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputName2"
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputExperience"
                        className="col-sm-2 col-form-label"
                    >
                        Experience
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="inputExperience"
                            placeholder="Experience"
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Skills
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputSkills"
                            placeholder="Skills"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <div className="icheck-primary">
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                name="terms"
                                defaultValue="agree"
                            />
                            <label htmlFor="agreeTerms">
                                <span>I agree to the </span>
                                <Link to="/">terms and condition</Link>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <Button type="submit" theme="danger">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SettingsTab;
