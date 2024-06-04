import axiosClient from './axiosClient';

// export async function signIn(email, password) {
//   try {
//     const formdata = new FormData();
//     formdata.append('email', email);
//     formdata.append('password', password);
//     const response = await axiosClient.post(`/auth/sign-in`, formdata);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function signIn(email, password) {
  try {
    const data = {
      email,
      password,
    };
    const response = await axiosClient.post('/auth/sign-in', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function signOut() {
  try {
    const response = await axiosClient.get('auth/sign-out');
    return response.data;
  } catch (err) {
    console.error(err);
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

/*
"name": 'quoc',
"address": 'da nang',
'province': 'da nang',
"dateOfBirth": '2002/12/06',
"email": 'quoc@gmail.com',
"phoneNumber": '+84339760727',
"roles": {
  "name": 'USER'
},
"password": 'quoc1234'
*/

// export async function signUp({ name, address, province, dateOfBirth, phoneNumber, roles, email, password }) {
//   try {
//     // Định dạng lại dateOfBirth thành chuỗi "YYYY/MM/DD"
//     const formattedDateOfBirth = new Date(dateOfBirth).toISOString().split('T')[0].replace(/-/g, '/');

//     // Chuyển đổi đối tượng roles thành chuỗi JSON
//     const formattedRoles = JSON.stringify(roles);

//     // Sử dụng URLSearchParams để định dạng dữ liệu gửi đi
//     const urlencoded = new URLSearchParams();
//     urlencoded.append('name', name);
//     urlencoded.append('address', address);
//     urlencoded.append('province', province);
//     urlencoded.append('dateOfBirth', formattedDateOfBirth);
//     urlencoded.append('phoneNumber', phoneNumber);
//     urlencoded.append('roles', formattedRoles); // Gửi roles dưới dạng chuỗi JSON
//     urlencoded.append('email', email);
//     urlencoded.append('password', password);

//     const response = await axiosClient.post(`/auth/sign-up`, urlencoded, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });
    
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function signUp({ name, address, province, dateOfBirth, phoneNumber, roles, email, password }) {
  try {
    // Định dạng lại dateOfBirth thành chuỗi "YYYY-MM-DD"
    const formattedDateOfBirth = new Date(dateOfBirth).toISOString().split('T')[0];

    const data = {
      name,
      address,
      province,
      dateOfBirth: formattedDateOfBirth,
      phoneNumber,
      roles,
      email,
      password,
    };

    const response = await axiosClient.post('/auth/sign-up', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Lấy thông tin người dùng

export async function userProfile(id) {
  try {
    const response = await axiosClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}