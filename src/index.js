export default class ErrorRepository {
  constructor() {
    this.repository = new Map();
  }

  addError(code, description) {
    this.repository.set(code, description);
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    }
    return 'Unknown error';
  }
}
