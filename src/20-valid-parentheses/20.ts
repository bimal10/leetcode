// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.

function isValid(s: string): boolean {
  class Stack<T> {
          private array: T[] = [];
        
          pop(): T | undefined {
          //   if (this.isEmpty()) throw new EmptyStackException();
        
            return this.array.pop();
          }
        
          push(data: T): void {
            this.array.push(data);
          }
        
          peek(): T {
            // if (this.isEmpty()) return '':T;
        
            return this.array[this.array.length - 1];
          }
        
          isEmpty(): boolean {
            return this.array.length === 0;
          }
        }
  
        let starters = "{[(";
        let enders = "}])";
  
        let stack = new Stack<string>();
        let c=0;
        while(c<s.length){
          let token = s.charAt(c);
          if(starters.indexOf(token) > -1) {
              stack.push(token);
          } else if(enders.indexOf(token) > -1) {
              if(starters.charAt(enders.indexOf(token)) === stack.peek()){
                  stack.pop();
              } else {
                stack.push(token)
              }
          } 
          c++;
        }
        if(stack.isEmpty())
          return true;
        else 
          return false;
  };



/**
 * Test
 */
describe("20. Valid Parentheses", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = isValid("(){}}{");
        expect(input).toBe(false);
    });
});

// Make this file a module to avoid global scoping
export { }
