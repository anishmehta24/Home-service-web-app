import { gql, request } from 'graphql-request'

const MASTER_URL =' https://api-ap-south-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'

const getCategory=async() => {
    const query = gql`query MyQuery {
  categories {
    id
    name
    icon {
      url
    }
  }
}
`

const result = await request(MASTER_URL,query)
return result;
}

const getAllBusinessList =async()=>{
    const query=gql`
    query BusinessList {
  businessLists {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    images {
      url
    }
    name
  }
}
`
const result = await request(MASTER_URL,query)
return result;
}

const getBusinessByCategory=async(category)=>{
  const query = gql`
  query MyQuery {
  businessLists(where: {category: {name: "`+category+`"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}

`
const result = await request(MASTER_URL,query)
return result;
}

const getBusinessById = async(id)=>{
  const query = gql`
  query GetBusinessById {
  businessList(where: {id: "`+id+`"}) {
    about
    address
    category {
      name
    }
    contactPerson
    id
    email
    name
    images {
      url
    }
  }
}
`
const result = await request(MASTER_URL,query)
return result;
}

const createNewBooking = async(businessId,date,time,userEmail,userName)=>{
  const mutationQuery = gql`
  mutation CreateBooking {
  createBooking(
    data: {bookingStatus: Booked, businessList: {connect: {id: "`+businessId+`"}}, date: "`+date+`", time: "`+time+`", userEmail: "`+userEmail+`", userName: "`+userName+`"}
  ) {
    id
  }
    publishManyBookings(to: PUBLISHED) {
    count
  }
}
`
const result = await request(MASTER_URL,mutationQuery)
return result;
}

const businessBookedSlot = async(businessId,date)=>{
  const query = gql`
  query BusinessBookingSlot {
  bookings(where: {businessList: {id: "`+businessId+`"}, date: "`+date+`"}) {
    date
    time
  }
}
`
const result = await request(MASTER_URL,query)
return result;
}

const getUserBookingHistory = async(userEmail)=>{
  const query = gql`
  query GetUserBookingHistory {
  bookings(where: {userEmail: "`+userEmail+`"}, orderBy: publishedAt_DESC) {
    businessList {
      name
      images {
        url
      }
      contactPerson
      address
    }
    date
    time
  }
}
`

const result = await request(MASTER_URL,query)
return result;
}

export default{
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessById,
    createNewBooking ,
    businessBookedSlot,
    getUserBookingHistory
}