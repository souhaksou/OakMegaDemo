import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../layout/DashboardLayout.vue'
import Home from '../pages/Home.vue'
import Brand from '../pages/Brand.vue'
import Events from '../pages/Events.vue'
import Trainers from '../pages/Trainers.vue'
import TrainerProfile from '../pages/TrainerProfile.vue'
import Register from '../pages/Register.vue'
import VisitBooking from '../pages/VisitBooking.vue'
import Location from '../pages/Location.vue'
import Locations from '../pages/Locations.vue'
import ClassBooking from '../pages/ClassBooking.vue'
import TrainerSchedule from '../pages/trainer/Schedule.vue'
import Students from '../pages/trainer/Students.vue'
import StudentRecord from '../pages/trainer/StudentRecord.vue'
import ClassManagement from '../pages/trainer/ClassManagement.vue'
import Resources from '../pages/trainer/Resources.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'brand', name: 'brand', component: Brand },
      { path: 'events', name: 'events', component: Events },
      { path: 'trainers', name: 'trainers', component: Trainers },
      { path: 'trainers/:id', name: 'trainer-profile', component: TrainerProfile },
      { path: 'register', name: 'register', component: Register },
      { path: 'visit-booking', name: 'visit-booking', component: VisitBooking },
      { path: 'location', name: 'location', component: Location },
      { path: 'locations', name: 'locations', component: Locations },
      { path: 'class-booking', name: 'class-booking', component: ClassBooking },
      { path: 'trainer/schedule', name: 'trainer-schedule', component: TrainerSchedule },
      { path: 'trainer/students', name: 'trainer-students', component: Students },
      { path: 'trainer/student-record', name: 'trainer-student-record', component: StudentRecord },
      { path: 'trainer/class-management', name: 'trainer-class-management', component: ClassManagement },
      { path: 'trainer/resources', name: 'trainer-resources', component: Resources },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
