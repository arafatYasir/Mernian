import { useState } from "react";
import TrashIcon from "../icons/TrashIcon"

const AdditionalInformation = () => {
    const [informations, setInformations] = useState([
        { id: 1, name: "", value: "" },
        { id: 2, name: "", value: "" },
        { id: 3, name: "", value: "" }
    ]);

    const handleInputChange = (e, id, field) => {
        const targetedInput = informations.map(info => info.id === id ? { ...info, [field]: e.target.value } : info);
        setInformations(targetedInput)
    }

    const handleAddInfo = () => {
        const newInformation = {
            id: informations.length + 1,
            name: "",
            value: ""
        };

        setInformations([...informations, newInformation]);
    }

    const handleDeleteInfo = (id) => {
        const newInformations = informations.filter(info => info.id !== id);
        setInformations(newInformations);
    }

    return (
        <div>
            <div className="flex items-center gap-[390px] w-full">
                <p className="text-[12px] font-['Inter'] font-medium">Additional Information</p>
                <button onClickCapture={handleAddInfo} className="text-white text-[12px] font-['Inter'] bg-[#615DFA] rounded-md w-6 h-4 flex items-center justify-center cursor-pointer">+</button>
            </div>
            <div className="flex flex-wrap gap-[10px] mt-[10px]">
                {informations.map(i => <div className="flex gap-1" key={i.id}>
                    <div className="flex gap-[10px]">
                        <input
                            className="placeholder:text-[#D9D9D9] w-[255px] h-[30px] text-[12px] font-['Inter'] px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] outline-none"
                            type="text"
                            placeholder="Feature Name"
                            value={i.name}
                            onChange={(e) => handleInputChange(e, i.id, "name")}
                        />

                        <input
                            className="placeholder:text-[#D9D9D9] w-[255px] h-[30px] text-[12px] font-['Inter'] px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] outline-none"
                            type="text"
                            placeholder="Feature Value"
                            value={i.value}
                            onChange={(e) => handleInputChange(e, i.id, "value")}
                        />
                    </div>

                    <div onClick={() => handleDeleteInfo(i.id)} className="bg-[#EA5050] w-4 h-[30px] flex items-center justify-center rounded-sm cursor-pointer">
                        <TrashIcon />
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AdditionalInformation;