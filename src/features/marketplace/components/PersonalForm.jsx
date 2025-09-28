import React from "react";
import "./style/personalForm.css";

const PersonalForm = () => {
    return (
        <div className="formContainer">
            <div className="formHeader">
                <h3>Data Diri</h3>
            </div>
            <form className="formContent">
                <div className="formRow">
                    <div className="formGroup">
                        <label>Nama Depan*</label>
                        <input type="text" placeholder="Masukkan nama depan" />
                    </div>
                    <div className="formGroup">
                        <label>Nama Belakang*</label>
                        <input type="text" placeholder="Masukkan nama belakang" />
                    </div>
                </div>

                <div className="formRow">
                    <div className="formGroup">
                        <label>Email*</label>
                        <input type="email" placeholder="Masukkan email" />
                    </div>
                    <div className="formGroup">
                        <label>Nomor Handphone*</label>
                        <input type="text" placeholder="Masukkan no. HP" />
                    </div>
                </div>

                <div className="formGroup">
                    <label>Alamat Jalan*</label>
                    <input type="text" placeholder="Masukkan alamat jalan" />
                </div>

                <div className="formGroup">
                    <label>Kota/Kabupaten*</label>
                    <input type="text" placeholder="Masukkan kota/kabupaten" />
                </div>

                <div className="formGroup">
                    <label>Provinsi/Negara*</label>
                    <input type="text" placeholder="Masukkan provinsi/negara" />
                </div>

                <div className="formGroup">
                    <label>Kode Pos*</label>
                    <input type="text" placeholder="Masukkan kode pos" />
                </div>
            </form>
        </div>
    );
};

export default PersonalForm;