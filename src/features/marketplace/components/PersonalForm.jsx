import React, { useState, useEffect } from "react";
import "./style/personalForm.css";

const PersonalForm = ({ onFormChange }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
    });

    useEffect(() => {
        // Cek apakah semua field sudah terisi
        const isValid = Object.values(formData).every((val) => val.trim() !== "");
        onFormChange(isValid);
    }, [formData, onFormChange]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="formContainer">
            <div className="formHeader">
                <h3>Data Diri</h3>
            </div>
            <form className="formContent">
                <div className="formRow">
                    <div className="formGroup">
                        <label>Nama Depan*</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Masukkan nama depan"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Nama Belakang*</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Masukkan nama belakang"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="formRow">
                    <div className="formGroup">
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Masukkan email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Nomor Handphone*</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Masukkan no. HP"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="formGroup">
                    <label>Alamat Jalan*</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Masukkan alamat jalan"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="formGroup">
                    <label>Kota/Kabupaten*</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Masukkan kota/kabupaten"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>

                <div className="formGroup">
                    <label>Provinsi/Negara*</label>
                    <input
                        type="text"
                        name="province"
                        placeholder="Masukkan provinsi/negara"
                        value={formData.province}
                        onChange={handleChange}
                    />
                </div>

                <div className="formGroup">
                    <label>Kode Pos*</label>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Masukkan kode pos"
                        value={formData.postalCode}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default PersonalForm;
