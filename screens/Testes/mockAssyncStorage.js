const mockAsyncStorage = {
    storage: {},
  
    setItem: jest.fn((key, value) => {
      return new Promise((resolve) => {
        mockAsyncStorage.storage[key] = value;
        resolve();
      });
    }),
  
    getItem: jest.fn((key) => {
      return new Promise((resolve) => {
        resolve(mockAsyncStorage.storage[key] || null);
      });
    }),
  
    clear: jest.fn(() => {
      return new Promise((resolve) => {
        mockAsyncStorage.storage = {};
        resolve();
      });
    }),
  };
  
  export default mockAsyncStorage;
  