import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const saveToxls = (data) => {
    const newSheetdata = data.map((items) => {
        return { "User Name": items.userName, "Nick Name": items.nickName, "Game": items.game, "Phone no": items.phoneno }
    })
    const ws = XLSX.utils.json_to_sheet(newSheetdata);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    const wbout = XLSX.write(wb, {bookType:'xlsx', type: 'binary'});
    let buf = new ArrayBuffer(wbout.length);
    let view = new Uint8Array(buf);
    for (let i=0; i<wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xFF;
    saveAs(new Blob([buf],{type:"application/octet-stream"}), 'Data.xlsx');
}

export {saveToxls};

