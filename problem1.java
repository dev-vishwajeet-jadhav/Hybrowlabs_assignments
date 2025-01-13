//Problem
// Given any string, find the number of characters of the same letter
// The Sequence of the output of counts should be in order in which the letters come in the word.
// Ignore whitespaces. Also, focus on optimizing code as much as possible.
import java.util.LinkedHashMap;
import java.util.Map;

public class CharacterCount {

    /**
     *
     * @param inputString
     */
    public static void countCharacters(String inputString) {

        //Removing the whitespaces if it is existed
        String formattedString = inputString.replaceAll(" ", "").toUpperCase();

        //Created the hashmap
        Map<Character, Integer> charCountMap = new LinkedHashMap<>();

        //Looping through the string to choose every charcter
        or (char c : forma
        fttedString.toCharArray()) {
            charCountMap.put(c, charCountMap.getOrDefault(c, 0) + 1);
        }

        // Priniting the result in the given format
        for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()) {
            System.out.println(entry.getKey() + "-" + entry.getValue());
        }
    }

    public static void main(String[] args) {
        System.out.println("Output for 'Amolya Sharma':");
        countCharacters("Amolya Sharma");
    }
}
