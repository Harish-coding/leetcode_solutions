import java.util.HashMap;

class Solution {
    
    private final static HashMap<Character, Integer> ROMANS = new HashMap<>();
    
    private static void init_roman() {
        ROMANS.put('I', 1);
        ROMANS.put('V', 5);
        ROMANS.put('X', 10);
        ROMANS.put('L', 50);
        ROMANS.put('C', 100);
        ROMANS.put('D', 500);
        ROMANS.put('M', 1000);   
    }
    
    
    public int romanToInt(String s) {
        
        init_roman();
        
        int sum = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (i < s.length() - 1 && ROMANS.get(s.charAt(i)) < ROMANS.get(s.charAt(i + 1))) {
                sum += (ROMANS.get(s.charAt(i + 1)) - ROMANS.get(s.charAt(i)));
                i++;
                continue;
            }
            sum += ROMANS.get(s.charAt(i));
        }
        
        return sum;
        
    }
}