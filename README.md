# Polynomial Constant Term Calculation  

This is an assigniment by catalog company. the goal is to implements a simplified version of *Shamir's Secret Sharing* algorithm.

---

## Approach  

1. *Decode Values:* Convert encoded values from their respective bases into **decimal integers**.  
2. *Select Points:* Sort the roots by their **x-values** and select the *first k points*.  
3. *Lagrange Interpolation:* Compute the **constant term 'c'** at *x = 0* using *Lagrange interpolation*, ensuring precision with **BigInt** for large numbers.  

---

## Explanation  

### Lagrange Interpolation  

- The polynomial is evaluated at *x = 0* using *Lagrange interpolation*.  
- Each selected point contributes to the **constant term 'c', and their sum** gives the final result.  
- *BigInt* ensures precision, and the *Greatest Common Divisor (GCD)* is used to simplify fractions, avoiding overflow and ensuring accuracy.  

---

## Results  

| Test Case | Output |
|-----------|--------|
| *Test Case 1* | 3 |
| *Test Case 2* | 79836264049851 |

> *Note*: The results might not be correct or accurate, as the actual results are not disclosed.

---

## Technologies Used  

- *JavaScript* (BigInt for precision)  
- *Lagrange Interpolation*  
- *Shamir’s Secret Sharing (Simplified)*  
