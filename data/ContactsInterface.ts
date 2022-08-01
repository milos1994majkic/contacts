export interface ContactInterface {
  id: string
  firstName: string
  lastName: string
  profilePhoto: string
  email: string
  phoneNumber : string
  favourite: boolean
  label: {
    id : string
    title : string
  }
}
