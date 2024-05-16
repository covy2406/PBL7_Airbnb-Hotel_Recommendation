import axiosClient from './axiosClient';

export async function signIn(email, password) {
  try {
    const formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    const response = await axiosClient.post(`/auth/sign-in`, formdata);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

/*
"name": "string",
  "address": "string",
  "province": "string",
  "dateOfBirth": "YYYY/MM/DD",
  "email": "string",
  "phoneNumber": "string",
  "roles": {},
  "password": "string"
*/
export async function signUp({ name, address, province, dateOfBirth, phoneNumber, roles, email, password }) {
  try {
    // Định dạng lại dateOfBirth thành chuỗi "YYYY-MM-DD"
    // const formattedDateOfBirth = new Date(dateOfBirth).toISOString().split('T')[0];
    const formattedDateOfBirth = new Date(dateOfBirth).toISOString().split('T')[0].replace(/-/g, '/');

    // thứ tự DD/MM/YYYY
    //const formattedDateOfBirth = new Date(dateOfBirth).toLocaleDateString('en-GB');

    // Chuyển đổi đối tượng roles thành chuỗi JSON
    const roles = JSON.stringify({});

    var urlencoded = new URLSearchParams();
    urlencoded.append('userName',name);
    urlencoded.append('address',address);
    urlencoded.append('province', province);
    urlencoded.append('dateOfBirth', formattedDateOfBirth);
    urlencoded.append('phoneNumber', phoneNumber);
    urlencoded.append('roles', roles); // Gửi roles dưới dạng chuỗi JSON
    urlencoded.append('email', email);
    urlencoded.append('password', password);
    const response = await axiosClient.post(`/auth/sign-up`, urlencoded, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
