import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layout/DashboardLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('../pages/Home.vue') },
      { path: 'brand', name: 'brand', component: () => import('../pages/Brand.vue') },
      { path: 'events', name: 'events', component: () => import('../pages/Events.vue') },
      { path: 'events/:id', name: 'event-detail', component: () => import('../pages/EventDetail.vue') },
      { path: 'trainers', name: 'trainers', component: () => import('../pages/Trainers.vue') },
      { path: 'trainers/:id', name: 'trainer-profile', component: () => import('../pages/TrainerProfile.vue') },
      { path: 'register', name: 'register', component: () => import('../pages/Register.vue') },
      { path: 'visit-booking', name: 'visit-booking', component: () => import('../pages/VisitBooking.vue') },
      { path: 'locations', name: 'locations', component: () => import('../pages/Locations.vue') },
      { path: 'locations/:region', name: 'location-region', component: () => import('../pages/LocationRegion.vue') },
      { path: 'class-booking', name: 'class-booking', component: () => import('../pages/ClassBooking.vue') },
      { path: 'trainer/schedule', name: 'trainer-schedule', component: () => import('../pages/trainer/Schedule.vue') },
      { path: 'trainer/students', name: 'trainer-students', component: () => import('../pages/trainer/Students.vue') },
      { path: 'trainer/student-record', name: 'trainer-student-record', component: () => import('../pages/trainer/StudentRecord.vue') },
      { path: 'trainer/class-management', name: 'trainer-class-management', component: () => import('../pages/trainer/ClassManagement.vue') },
      { path: 'trainer/resources', name: 'trainer-resources', component: () => import('../pages/trainer/Resources.vue') },
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

