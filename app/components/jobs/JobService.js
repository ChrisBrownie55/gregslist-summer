import Job from '../../models/Job.js';

const jobs = [];

export default class JobService {
  constructor() {}

  get jobs() {
    return JSON.parse(JSON.stringify(jobs));
  }

  addJob(formData) {
    houses.push(new Job(...Array.from(formData.value())));
  }
}